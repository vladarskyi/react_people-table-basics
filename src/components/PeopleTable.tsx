import { FC } from 'react';
import { Person } from '../types/Person';
import { PersonInfo } from './PersonInfo';

export interface Props {
  people: Person[];
}

export const PeopleTable: FC<Props> = ({ people }) => (
  <table
    data-cy="peopleTable"
    className="table is-striped is-hoverable is-narrow is-fullwidth"
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>

    <tbody>
      {people.map(person => (
        <PersonInfo person={person} key={person.slug} />
      ))}
    </tbody>
  </table>
);
