import "../pages/index.css";
import Card from "../scripts/components/Card";
import {templateSelector} from "./utils/constants";

const form = document.querySelector(".add-item__form");
const itemsSection = document.querySelector(".items__grid");

function getValues() {
    const inputs = form.querySelectorAll(".add-item__input");

    const inputValues = {};
    inputs.forEach((input) => {
        inputValues[input.name] = input.value;
    })
    return inputValues;
}

function handleFormSubmit(evt, data) {
    evt.preventDefault();

    const newCard = new Card(data, templateSelector).getCard();

    itemsSection.prepend(newCard);

    form.reset();
}

form.addEventListener("submit", (evt) => {
    handleFormSubmit(evt, getValues())
})