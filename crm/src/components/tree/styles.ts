import styled from "styled-components";

export const Tree = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  nav {
    flex: 1;
    width: 100%;

    ul,
    div,
    li {
      border-style: unset !important;
    }

    > ul {
      margin: 2px 0px;
      min-height: 35px;

      > li {
        height: 100%;
        display: flex;

        > div {
          display: flex;
          width: 100%;
          height: 100%;
          padding: 8px !important;
          border-radius: 6px;
          color: var(--text-secondary-color) !important;
          font-size: 12px;
          cursor: pointer;

          &:hover {
            background-color: var(--surface-color-100) !important;
          }

          > span {
            display: flex;
            align-items: center;

            > span {
              margin: 0px 8px;
            }

            > svg {
              width: 20px;
              height: 20px;
            }
          }

          > svg {
            width: 20px;
            height: 20px;
            margin-left: auto;
          }
        }
      }

      > ul {
        > li {
          min-height: 26px;
          display: flex;
          align-items: center;

          > div {
            flex: 1;
            height: 100%;
            margin: 2px 0px 2px 36px;
            padding: 6px !important;
            border-radius: 6px;
            color: var(--text-secondary-color) !important;
            font-size: 12px;
            cursor: pointer;

            &:hover {
              background-color: var(--surface-color-100) !important;
            }

            > span {
              display: flex;
              align-items: center;

              > span {
                font-size: 10px !important;
              }
            }
          }
        }
      }
    }
  }
`;
