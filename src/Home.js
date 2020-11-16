import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep." />

                <Card
                    src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=1200"
                    title="Online experiences"
                    description="Unique activities we can do together, led by a world of hosts." />

                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=1200"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family." />
            </div>
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/19e8837c-59f3-43d9-8e7a-b08633c64c7e.jpg?im_w=1200"
                    title="4 star holiday home in SÄLEN"
                    description="This newly-built and well-equipped cottage is set only 30 metres from the beautiful stream of Saldalsbäcken, in Dalarna."
                    price="1102 SEK/night" />

                <Card
                    src="https://a0.muscache.com/im/pictures/e4caf96e-9185-4196-8de2-6c4053b3a9f0.jpg?im_w=1200"
                    title="Archipelago Hideaway - Oasis on the Sea with Spa"
                    description="Authentically Scandinavian decorated wooden cabin set 1 meter from the Baltic sea, giving you breathtaking sea views."
                    price="2106 SEK/night" />

                <Card
                    src="https://a0.muscache.com/im/pictures/280281f7-d83f-47bf-9e9b-da454901764e.jpg?im_w=1200"
                    title="Seafront Apartment close to STKHLM City-center"
                    description="Living on the Stockholm sea front - with views over Stockholm's most beautiful island, Djurgården, and direct access to the city center in 15 min by boat, leaving directly in front of the apartment!"
                    price="708 SEK/night" />
            </div>
        </div>
    )
}

export default Home
