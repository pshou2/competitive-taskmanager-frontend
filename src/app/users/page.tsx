export default async function Page() {
  const data = await fetch('http://localhost:5000/api/users');
  const users = await data.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>{user.username}:{user.email}</li>
      ))}
    </ul>
  )
}