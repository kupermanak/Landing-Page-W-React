import React from "react";
import Card from "./card";
import Jumbotrom from "./Jumbotrom";

const Body = () => {
	return (
		<>
			<Jumbotrom />
			{/* CARDS */}
			<div className="container">
				<div className="row">
					{/* CARD1 */}
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen="https://i.picsum.photos/id/58/500/325.jpg?hmac=MKmUs9hbgzUZJHyqEQOcYLFfoTNd6zCT11Z0uD-Nzyc"
							titulo="Producto1"
							texto="This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer."
							button="Find Out More!"
						/>
					</div>

					{/* CARD2 */}
					<div className="col-sm-12 col-md-6 col-lg-3 pb-2">
						<Card
							imagen="https://i.picsum.photos/id/335/500/325.jpg?hmac=9Ip-khsWl3Lte64Ko_9gkIEmMJVMddbyxLmsRcLUVZI"
							titulo="Producto2"
							texto="This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer."
							button="Discount here!"
						/>
					</div>

					{/* CARD3 */}
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen="https://i.picsum.photos/id/131/500/325.jpg?hmac=5_onROFAd9ZWBUjg6-IabLpXoTu8411Hh7hBT71Y3Pg"
							titulo="Producto3"
							texto="This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer."
							button="Thats Awesome!"
						/>
					</div>

					{/* CARD4 */}
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen="https://i.picsum.photos/id/902/500/325.jpg?hmac=n1wcoKtsCnNKKe1k5gNUbOZ_L_FpHn3s5CSonSA4-Pc"
							titulo="Producto4"
							texto="This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer."
							button="What else?!"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Body;
