import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core"
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 26 august to 30 august · 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/f98eae8a-3a4e-457f-96a1-6cd9ab44458e.jpg?aki_policy=xx_large"
                location="Lidingö, Stockholms län, Sverige"
                title="Pick Homegrown Vegetables at a Quaint, Airy Hideaway"
                description="The perfect place to stay at for you vacation in Stockholm.
            Sit on the patio and listen to the birds over breakfast at this charming 100-year-old cottage with homey oak floors."
                star={4.88}
                price="586 SEK"
                total="5 176 SEK"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/c12adc90-7e1a-4ed1-88d8-11abf086034a.jpg?im_w=1200"
                location="Stockholm, Stockholms län, Sverige"
                title="Charming 2-room apartment. Close to inner city."
                description="Close to nature, water and inner city life. Close to subway station Abrahamsberg, around 10 min ride to inner city. Balcony facing a green area. The apartment is located at a blind alley so calm with almost no traffic."
                star={4.62}
                price="731 SEK"
                total="5 636 SEK"
            />
        </div>


    )
}

export default SearchPage
