import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const List = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const onClickDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const onClickToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <StListContainer>
      <h2>Working...</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <div>
                  <StLink to={`/${todo.id}`} key={todo.id}>
                    <div>상세보기</div>
                  </StLink>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StFooter>
                  <Stbutton
                    borderColor="red"
                    onClick={() => {
                      onClickDelete(todo.id);
                    }}
                  >
                    삭제하기
                  </Stbutton>
                  <Stbutton
                    borderColor="green"
                    onClick={() => {
                      onClickToggle(todo.id);
                    }}
                  >
                    {todos.isDone ? "취소" : "완료"}
                  </Stbutton>
                </StFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2>Done...</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <div>
                  <StLink to={`/${todo.id}`} key={todo.id}>
                    <div>상세보기</div>
                  </StLink>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StFooter>
                  <Stbutton
                    borderColor="red"
                    onClick={() => {
                      onClickDelete(todo.id);
                    }}
                  >
                    삭제하기
                  </Stbutton>
                  <Stbutton
                    borderColor="green"
                    onClick={() => {
                      onClickToggle(todo.id);
                    }}
                  >
                    {todos.isDone ? "완료" : "취소"}
                  </Stbutton>
                </StFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24;
`;
const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const Stbutton = styled.button`
  border: 2px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const StFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;
const StLink = styled(Link)`
  text-decoration: none;
`;
