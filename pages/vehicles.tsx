import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface VehiclesPropTypes {
  vehicles?: Vehicle[];
}

function Vehicles({ vehicles }: VehiclesPropTypes) {
  console.log({ vehicles });
  return (
    <div>
      <p>Welcome to the vehicles page</p>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">ownerID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles?.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.brand}</TableCell>
                <TableCell align="right">{row.model}</TableCell>
                <TableCell align="right">{row.ownerId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Vehicles;

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  ownerId: string;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/vehicles");
  const vehicles: Vehicle[] | undefined = await res.json();

  return {
    props: {
      vehicles,
    },
  };
}
