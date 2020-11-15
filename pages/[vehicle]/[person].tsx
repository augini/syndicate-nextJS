import { useRouter } from "next/router";
import { User } from "../details";
import { NextPageContext } from "next";

export interface PersonProps {
  user?: User;
}

function Person({ user }: PersonProps) {
  const router = useRouter();
  console.log({ user });
  return (
    <div>
      <p>Welcome to the person page</p>
      <p>
        This {router.query.vehicle} belongs to {router.query.person}
      </p>
      <ol>
        <li>
          <p>
            <strong>Name: </strong>
            {user?.name}
          </p>
        </li>
        <li>
          <p>
            <strong>Email: </strong>
            {user?.email}
          </p>
        </li>
        <li>
          <p>
            <strong>Phone: </strong>
            {user?.phone}
          </p>
        </li>
        <li>
          <p>
            <strong>Website: </strong>
            {user?.website}
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Person;

export async function getServerSideProps({ query }: NextPageContext) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.person}`
  );
  const user: User | undefined = await res.json();

  return {
    props: {
      user,
    },
  };
}
