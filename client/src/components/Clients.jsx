import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { GET_CLIENTS } from "../queries/clientQueries";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";


export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Status</th> */}
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
             {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}

          </MDBTableBody>
        </MDBTable>
      )}
    </>
  );
}