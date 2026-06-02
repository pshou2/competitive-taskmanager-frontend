export default async function Page() {
  const data = await fetch(`${process.env.SERVER_URL}/users`);
  const users = await data.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>{user.username}:{user.email}</li>
      ))}
    </ul>
  )
}