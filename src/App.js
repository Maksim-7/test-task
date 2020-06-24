import React from "react";
import Table from "./Table/Table";
import { ReadonlyCell, EditableCell } from "./Table/Cell";
import { getData } from "./utils";
import styled from "styled-components";

const Styles = styled.div`
  display: inline-block;
  width: auto;
  margin: 1rem;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 4px;

  table {
    border-spacing: 0;

    th {
      padding: 16px;
    }

    th,
    td {
      margin: 0;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;

      :last-child {
        border-right: 0;
      }
    }

    td {
      border-bottom: 1px solid #e0e0e0;
    }

    span {
      display: inline-block;
      padding: 16px;
      cursor: default;
    }

    input {
      display: inline-block;
      padding: 16px;
      outline: none;
      border: none;
      border-bottom: 2px solid rgba(25, 118, 210, 1);
      background-color: transparent;
    }

    input[readonly] {
      border: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
    }

    input[readonly]:hover {
      background-color: rgba(25, 118, 210, 0.015);
    }
  }

  .pagination {
    padding: 16px;
  }
`;

function App() {
  const EditableNumberCell = props => {
    return EditableCell(
      Object.assign({}, props, {
        validateCallback: value => {
          return 1 * value.replace(/\D/, "");
        }
      })
    );
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
            Cell: EditableCell
          },
          {
            Header: "Last Name",
            id: "lastName",
            accessor: d => d.lastName,
            Cell: EditableCell
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
            Cell: ReadonlyCell
          },
          {
            Header: "City",
            accessor: "city",
            Cell: ReadonlyCell
          }
        ]
      },
      {
        Header: "Stats",
        columns: [
          {
            Header: "Visits",
            accessor: "visits",
            Cell: EditableNumberCell
          }
        ]
      }
    ],
    []
  );

  const [skipPageReset, setSkipPageReset] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData().then(data => setData(data));
  }, []);

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value
          };
        }
        return row;
      })
    );
  };

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Styles>
  );
}

export default App;
