import React from "react";
import { Cost, Money } from "./GrandFather";

const SuperChild = () => {
  return (
    <div>
      SuperChild
      <br />
      <Money.Consumer>{(a) => <span>{a.amount}</span>}</Money.Consumer> <br />
      <Cost.Consumer>{(a) => <span>{a.amount}</span>}</Cost.Consumer>
      <table>
        <tr>
          <td>
            <Money.Consumer>{(a) => <span>{a.amount}</span>}</Money.Consumer>{" "}
            <Cost.Consumer>{(a) => <span>{a.amount}</span>}</Cost.Consumer>
          </td>
          <td>
            <Cost.Consumer>
              {(c) => (
                <Money.Consumer>
                  {(a) => (
                    <span>
                      {a.amount} - {c.amount}
                    </span>
                  )}
                </Money.Consumer>
              )}
            </Cost.Consumer>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SuperChild;
