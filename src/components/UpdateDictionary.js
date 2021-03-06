import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateDictionaryFB } from "../redux/modules/dictionary";
import Button from "@mui/material/Button";

const UpdateDictionary = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const my_dictionary = useSelector((state) => state.dictionary.list);
  console.log(my_dictionary)

  // const dictId = useSelector((state) => state.dictionary.list.id);
  // const dictWord = useSelector(
  //   (state) => state.dictionary.list[dict_index].word
  // );
  // const dictMeaning = useSelector(
  //   (state) => state.dictionary.list[dict_index].meaning
  // );
  // const dictExample = useSelector(
  //   (state) => state.dictionary.list[dict_index].example
  // );
  const onChange = (e) => {
    console.log(e.target.value)
  };

  const word = React.useRef(null);
  const meaning = React.useRef(null);
  const example = React.useRef(null);

  const UpdateDictionary = () => {
    const update_dictionary = {
      word: word.current.value,
      meaning: meaning.current.value,
      example: example.current.value,
    };
    dispatch(updateDictionaryFB("dictId", update_dictionary));
    navigate("/");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>단어 수정하기</h1>
      <Line />
      <Box>
        <div>
          <label>단어</label>
          <input type="text" onChange={onChange} value={"dictWord"} ref={word} />
        </div>
        <div>
          <label>설명</label>
          <input type="text" placeholder={"dictMeaning"} ref={meaning} />
        </div>
        <div>
          <label>예시</label>
          <input type="text" placeholder={"dictExample"} ref={example} />
        </div>
        <Button variant="outlined" onClick={UpdateDictionary}>수정하기</Button>
        <Button
          sx={{ margin: 1 }}
          color="secondary"
          variant="outlined"
          onClick={() => {
            navigate('/');
          }}
        >
          메인으로
        </Button>
      </Box>
    </div>
  );
};

export default UpdateDictionary;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #5aadbf;
`;

const Box = styled.div`
  text-align: center;
  div {
    margin: 8px 0px;
    label {
      padding-right: 8px;
    }
    input {
      width: 280px;
      height: 80px;
    }
  }
`;
