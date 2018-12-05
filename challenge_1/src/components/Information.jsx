import React from 'react';
import { Table } from 'semantic-ui-react'

const Information = ({results}) => (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Category1</Table.HeaderCell>
            <Table.HeaderCell>Category2</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Granularity</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>

          {results.map((entry) => (
            <Table.Row>
              <Table.Cell>
              {<div dangerouslySetInnerHTML={{__html: entry.category1}}></div>}</Table.Cell>
              <Table.Cell>{entry.category2}</Table.Cell>
              <Table.Cell>{entry.date}</Table.Cell>
              <Table.Cell>{<div dangerouslySetInnerHTML={{__html: entry.description}}></div>}</Table.Cell>
              <Table.Cell>{entry.granularity}</Table.Cell>
              <Table.Cell>{entry.lang}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table>
    </div>

);


export default Information;