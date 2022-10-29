import { usersDatabase } from "../lib/users";

export default function userAuth(email: string | null, password: string | null): boolean {
  if (usersDatabase.find((user) => user.userName === email && user.password === password)) return true
  return false
}