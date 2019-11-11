import React from "react";
import Anuncio from "./Anuncio/Anuncio";
import styled from "styled-components";
import Side from "./SideMenu/Sidemenu";
import { TablePagination } from "@material-ui/core/";
import { useQuery } from "../queryHelper";
import Nav from "../Nav/Nav";

const Layout = styled.main`
  margin-top: 4rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 80%;
  margin: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Dashboard = props => {
  const query = useQuery();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const handleDrawerToggle = () => {
    props.openSideBar();
  };
  console.log(query.get("name"));

  const list = [
    {
      title: "Departamento 1",
      status: "En Alquiler",
      price: 3000,
      rooms: 2,
      bathrooms: 2,
      kitchen: 1,
      backyard: 0
    },
    {
      title: "Casa 1",
      status: "En Alquiler",
      price: 7500,
      rooms: 2,
      bathrooms: 2,
      kitchen: 1,
      backyard: 0
    },
    {
      title: "Casa 1",
      status: "En venta",
      price: 1000000,
      rooms: 2,
      bathrooms: 2,
      kitchen: 1,
      backyard: 0
    },
    {
      title: "Oficina muy bonita",
      status: "En Alquiler",
      price: 5000,
      rooms: 2,
      bathrooms: 2,
      kitchen: 1,
      backyard: 0
    }
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <Layout>
        <Side
          mobileOpen={props.sideBar}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Content>
          <Nav
            side={true}
            sideBar={props.sideBar}
            openSideBar={props.openSideBar}
            isAuthenticated={props.isAuthenticated}
            logout={props.logout}
          />
          <Grid>
            {list.map(item => (
              <Anuncio
                title={item.title}
                status={item.status}
                price={item.price}
                rooms={item.rooms}
                bathrooms={item.bathrooms}
                kitchen={item.kitchen}
                backyard={item.backyard}
              />
            ))}
          </Grid>
          <TablePagination
            component="div"
            page="0"
            count="10"
            rowsPerPage="10"
            rowsPerPageOptions={[10, 25, 50]}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onChangePage={handleChangePage}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
          />
        </Content>
      </Layout>
    </>
  );
};

export default Dashboard;
