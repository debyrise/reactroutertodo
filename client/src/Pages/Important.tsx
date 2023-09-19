import React, { useState ,useRef, useEffect } from "react";
import styled from "@emotion/styled";
import audi from "../assets/aud (1).wav"

const Container = styled.div`
	width: 100%;
`;

const Input = styled.input`
	width: 90%;
	height: 30px;
`;

const RadioInp = styled.input``;
const Box = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

	width: 90%;
`;

const Important:React.FC = () => {
	const myRef = useRef(null);
	const [title, setTitle] = useState("");
	const [taskData, setTaskData] = useState([
		{
			title: "make money",
			id: 1,
			status: false,
		},

		{
			title: "get money",
			id: 2,
			status: false,
		},

		{
			title: "have money ",
			id: 3,
			status: false,
		},
	]);

	const HandleChecked = (id: number) => {
		const iterate = taskData?.map((el) => {
			return el.id === id
				? {
						...el,
						status: !el.status,
				  }
				: el;
		});

		taskData?.some((el) => {
			if (el.status === true) {
				myRef?.current?.play();
			}
		});

		// taskData?.map((el) => {
		// if (el.status === true) {
		// myRef?.current?.play();
		// }
		// });

		setTaskData(iterate);
	};

	const AddTodo = () => {
		const newData = [
			
			{
				id: taskData.length + 1,
				title: title,
				status: false,
			},
      ...taskData,
		];
    //methods to reaarange data in json 
    // const sorted = newData? ((a:any,b:any) =>{
    //   return b.id - a.id
    // })
    //localstorage.setitem("myday",json.stringify(sorted))
    //setTaskData(sorted)

		localStorage.setItem("Important", JSON.stringify(newData));
		setTaskData(newData);
	};

  useEffect(()=>{

    const fetchData =  JSON.parse(localStorage.getItem("myDay") || "")

    setTaskData(fetchData)

  }, [])

	return (
		<Container>
			<h3>Important</h3>
			<Input
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<button onClick={AddTodo}>Add</button>
			<br />
			<br />
			<div>All Task</div>
			{taskData?.map((props) => (
				<div key={props.id}>
					{props.status === false ? (
						<Box>
							<RadioInp
								onClick={() => {
									HandleChecked(props.id);
								}}
								type='radio'
							/>
							<span>{props.title}</span>
						</Box>
					) : null}
				</div>
			))}

			<br />
			<br />
			<br />

			<div>Completed</div>
			{taskData?.map((props) => (
				<div key={props.id}>
					{props.status === true ? (
						<Box>
							<RadioInp
								onClick={() => {
									HandleChecked(props.id);
								}}
								checked={true}
								type='radio'
							/>
							<span
								style={{
									textDecoration: "line-through",
								}}>
								{props.title}
							</span>
						</Box>
					) : null}
				</div>
			))}

			<audio ref={myRef} src={audi} />
		</Container>
	);
};

export default Important;