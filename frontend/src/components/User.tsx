import React from 'react';
import { userInfo } from 'os';

interface IUser {
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user, children }) => {
  return (
    <div>
      <strong>Nome: </strong> { user.name } <br />
      <strong>E-mail: </strong> { user.email || 'Não possui e-mail' } <br /> <br />
    </div>
  );
};

export default User;