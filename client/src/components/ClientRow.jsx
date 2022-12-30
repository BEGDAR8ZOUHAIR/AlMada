import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
// import { GET_PROJECTS } from '../queries/projectQueries';

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });

  return (
    // <tr>
    //   <td>{client.name}</td>
    //   <td>{client.email}</td>
    //   <td>{client.phone}</td>
    //   <td>
    //     <button className='btn btn-danger btn-sm' onClick={deleteClient}>
    //       <FaTrash />
    //     </button>
    //   </td>
    // </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">{client.name}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{client.email}</p>
      </td>
      <td>
        <p className="fw-normal mb-1">{client.phone}</p>
      </td>
      {/* <td>
        <MDBBadge color="success" pill>
          Active
        </MDBBadge>
      </td> */}
      <td>
       <button className='btn btn-danger btn-sm' onClick={deleteClient}>
        <FaTrash />
        </button>
      </td>
    </tr>
  );
}
