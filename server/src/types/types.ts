import { Sessions } from 'src/sessions/entities/sessions.entity';

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  sessions: Sessions[];
}
