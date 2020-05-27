import styles from "./Header.module.scss";
import Link from "next/link";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import api from "@/api";
import { getTop5Modules } from "@/api/modules";
import Head from "next/head";
import core from 'core.learnbase.com'

export default class Header extends React.Component {
  componentDidMount() {
    getTop5Modules().then((data) => {
      this.setState({
        ...data,
      });
    });
  }

  render() {
    if (!this.props) {
      return <div className={styles.header}></div>;
    }

    return (
      <>
        <Head>
          <title>{this.props.title || "Title"}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.header}>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand>
              <Link
                href={this.props.url || "/home"}
                as={this.props.scheme || "/home"}
              >
                <div className={styles.title}>
                  {this.props.title || "Site Name"}
                </div>
              </Link>
            </Navbar.Brand>
            <NavDropdown.Divider />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ml-5">
              <NavDropdown.Divider />
              <Dropdown as={ButtonGroup}>
                <DropdownButton
                  variant="primary"
                  drop="down"
                  title={
                    this.props.allModules
                      ? this.props.allModules.text
                      : "All Modules"
                  }
                >
                  {this.state &&
                    this.state.modules &&
                    this.state.modules.list &&
                    this.state.modules.list.map(
                      (eachModule, index) =>
                        eachModule && (
                          <Link
                            as={this.state.modules.baseUrl + eachModule.url}
                            href={
                              this.state.modules.baseUrl + eachModule.scheme
                            }
                            key={index}
                          >
                            <Dropdown.Item
                              href={this.state.modules.baseUrl + eachModule.url}
                              key={index}
                              className="pl-3 mr-5"
                            >
                              <div className={styles.dropdown_button}>
                                <Badge
                                  variant="primary"
                                  className="float-left mr-2"
                                >
                                  Top 5
                                </Badge>{" "}
                                {eachModule.text}
                              </div>
                            </Dropdown.Item>
                          </Link>
                        )
                    )}
                  <Dropdown.Divider />
                  {this.props.allModules ? (
                    <Link
                      href={this.props.allModules.url || "/modules"}
                      as={this.props.allModules.url || "/modules"}
                    >
                      <Dropdown.Item
                        href={this.props.allModules.url || "/modules"}
                      >
                        {this.props.allModules.text || "All Modules"}
                      </Dropdown.Item>
                    </Link>
                  ) : (
                    <Link href="/modules" as="/modules">
                      <Dropdown.Item href="/modules">All Modules</Dropdown.Item>
                    </Link>
                  )}
                </DropdownButton>
              </Dropdown>
            </Nav>
            <Nav className="ml-auto mr-2">
              <Link href="/login" as="/login">
                <Nav.Link href="" onClick={() => window.location = core.env.AUTH_PAGE_URL}>Login/Sign Up</Nav.Link>
              </Link>
            </Nav>
          </Navbar>
        </div>
      </>
    );
  }
}
