import React, { useState } from "react";
import styled from "@emotion/styled";

const Column = styled.div <{isDragging:any}>`
	border: 1px solid gray;
	height: 500px;
	width: 280px;
	padding: 10px;
	margin-right: 30px;
  background-color: ${(props) => (props?.isDragging ? "blue" : " ")};
  transition: background-color 1s;
`;

const Card = styled.div <{isDragging:any}>`
	flex: 1;
	padding: 10px;
	background-color: #e4e0e0;
	color: black;
	border-radius: 2px;
	min-height: 100px;
	margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: ${(props) => (props?.isDragging? "grab" : "")};
`;

const Hold = styled.div`
	display: flex;
`;
const Content = styled.div``

type Status = "TODO" | "IN-PROGRESS" | "COMPLETED";

const Board:React.FC = () => {
	const myColumn: Status[] = ["TODO", "IN-PROGRESS", "COMPLETED"];

	const [data, setData] = useState([
		{
			id: 1,
			title: "signup page ",
			status: "TODO",
		},

		{
			id: 2,
			title: "Login Page",
			status: "TODO",
		},

		{
			id: 3,
			title: "Logout functionality",
			status: "TODO",
		},
	]);

	const HandleOnDrop = (e:any) => {
		e.preventDefault();
	};
   
  const [isDragging, setisDragging] = useState<any>()
	const HandleUpdateOnDrop = (id: number, status: Status) => {
		const card = data.find((el) => el.id === id);
    

		if (card && card.status !== status) {
			card.status = status;

  

			if (Array.isArray(data)) {
				setData((prev) => [card!, ...prev.filter((el) => el.id !== id)]);
			}
		}

		
	};

	return (
		<div>
			<h2>Board</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas
				molestias corporis reprehenderit dicta ut alias ullam qui rem quia.
			</p>
			<br />
			<Hold>
				{myColumn?.map((props) => (
					<div>
						<title>{props}</title>
						<Column
            isDragging = {isDragging === props}
							onDrop={(e) => {
                HandleUpdateOnDrop(Number(e.dataTransfer.getData("draggableid")),props)
                setisDragging(null)
              }}
							onDragOver={HandleOnDrop}>
							{data?.map((item) => (
								<div>
									{item.status === props ? (
										<Card
                    isDragging = {true}
											onDragStart={(e) => {
												e.dataTransfer.setData("draggableid", `${item.id}`);
                         setisDragging(props);
											
											}}
											draggable>
											<Content> {item.title} </Content>
										</Card>
									) : null}
								</div>
							))}
						</Column>
					</div>
				))}
			</Hold>
		</div>
	);
};

export default Board;