import useOnClickOutside from "hooks/useClickOutside";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as MoreIcon } from "../assets/more-vertical.svg";

const sampleData = [
  {
    id: "1",
    date: "22-04-2022",
    recipient: "Oyinda",
    status: "Pending",
    amount: "50,000",
    description: "blah blah",
  },
  {
    id: "2",
    date: "22-04-2022",
    recipient: "Oyinda",
    status: "Failed",
    amount: "50,000",
    description: "blah blah",
  },
  {
    id: "3",
    date: "22-04-2022",
    recipient: "Oyinda",
    status: "Pending",
    amount: "50,000",
    description: "blah blah",
  },
  {
    id: "4",
    date: "22-04-2022",
    recipient: "Oyinda",
    status: "Successfull",
    amount: "50,000",
    description: "blah blah",
  },
  {
    id: "5",
    date: "22-04-2022",
    recipient: "Oyinda",
    status: "Pending",
    amount: "50,000",
    description: "blah blah",
  },
];

const Table = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const ref = useRef();

  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <Kemi>
      <div className="table-view">
        <div className="table-head">
          <span>Date</span>
          <span>Recipient</span>
          <span>Description</span>
          <span className="status">Status</span>
          <span className="amount">Amount</span>
          <span className="more"></span>
        </div>
        <div className="table-body">
          {sampleData?.map((item, i) => {
            return (
              <div className="item">
                <span>{item?.date}</span>
                <span>{item?.recipient}</span>
                <span>{item?.description}</span>
                <div
                  className={`status ${
                    item?.status === "Pending"
                      ? "pending"
                      : item?.status === "Failed"
                      ? "failed"
                      : item?.status === "Successfull"
                      ? "successfull"
                      : ""
                  }`}
                >
                  <div
                    className={`dot ${
                      item?.status === "Pending"
                        ? "dot-pending"
                        : item?.status === "Failed"
                        ? "dot-failed"
                        : item?.status === "Successfull"
                        ? "dot-successfull"
                        : ""
                    }`}
                  ></div>
                  <span>{item?.status}</span>
                </div>
                <span className="amount">{item?.amount}</span>
                <span className="more">
                  <MoreIcon
                    onClick={() => {
                      setActiveIndex(i);
                      setShowMenu(!showMenu);
                    }}
                  />
                </span>

                {showMenu && activeIndex === i ? (
                  <div className="menu" ref={ref}>
                    <button className="edit" onClick={() => setShowMenu(false)}>
                      Edit
                    </button>
                    <button
                      className="cancel"
                      onClick={() => setShowMenu(false)}
                    >
                      Cancel payment
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Kemi>
  );
};

export default Table;

const Kemi = styled.div`
  width: 100vh;
  padding: 30px;
  margin: 30px;
  border: 1px solid #ddd;
  border-radius: 16px;

  .table-view {
    width: 100%;
    .table-head {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      span {
        flex: 1;
      }
      .status {
        flex: 0.5;
        margin-right: 10px;
      }
      .more {
        flex: 0.2;
      }
      .amount {
        flex: 0.4;
      }
    }
    .table-body {
      width: 100%;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        position: relative;

        span {
          flex: 1;
        }
        .more {
          flex: 0.2;
        }
        .amount {
          flex: 0.4;
        }
        .status {
          flex: 0.5;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          border: 1px solid #eee;
          margin-right: 10px;
          .dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .dot-pending {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: #b8bb18;
          }
          .dot-failed {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: red;
          }
          .dot-successfull {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: green;
          }
        }
        .pending {
          color: #b8bb18;
        }
        .failed {
          color: red;
        }
        .successfull {
          color: green;
        }

        .menu {
          width: 200px;
          border: 1px solid #eee;
          border-radius: 16px;
          position: absolute;
          top: 10px;
          right: 40px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          background-color: #fff;
          z-index: 2;

          button {
            padding: 20px 10px;
            border: none;
            background-color: transparent;
            font-weight: 600;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
              background-color: #e2e2e2;
              transition: all 0.3s ease-in-out;
            }
          }

          .edit {
            color: #000;
          }

          .cancel {
            color: red;
          }
        }
      }
    }
  }
`;
