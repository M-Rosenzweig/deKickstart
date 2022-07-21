import React from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <>
      <Menu style={{ marginTop: "10px" }}>
        <Menu.Item>
          {" "}
          <Link href={"/"}>
            <a className="item">CrowdCoin</a>
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link href={"/"}>
              <a className="item">Campaigns</a>
            </Link>
          </Menu.Item>
          {/* <Menu.Item onClick={() => router.push("/campaigns/new")}>+</Menu.Item> */}

          <Menu.Item> <Link href={'/campaigns/new'}><a className="item">+</a></Link></Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
}

export default Header;
