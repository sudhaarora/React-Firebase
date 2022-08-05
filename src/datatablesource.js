export const userColumns = [
  { field: "id", headerName: "ID", width: 230 },
  {
    field: "user",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "phone",
    headerName: "Contact No",
    width: 200,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  }
];
