import Link from "next/link";

export interface DetailsProps {
  users: User[] | undefined;
}

function Details({ users }: DetailsProps) {
  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <Link as={`${user.name}/${user.id}`} href="/[vehicle]/[person]">
            <a>
              Navigate to <strong> {user.name} </strong> who has an email
              address of
              {user.email}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Details;

export interface User {
  address: object;
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] | undefined = await res.json();

  return {
    props: {
      users,
    },
  };
}
