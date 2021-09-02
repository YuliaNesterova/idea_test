import {deleteButtonDisplayClass} from "../utils/constants";

export default class Card {
    constructor( data, templateSelector) {
        this._data = data;
        this._templateSelector = templateSelector;
    }

    _deleteCard(evt) {
        evt.target.closest(".items-grid__card").remove();
    }

    _handleDeleteButtonShow(button) {
        if(button.classList.contains(deleteButtonDisplayClass)) {
            button.classList.remove(deleteButtonDisplayClass)
        } else {
            button.classList.add(deleteButtonDisplayClass)
        }
    }

    _getTemplate() {
        const card = document.querySelector(this._templateSelector).content.cloneNode(true);

        const cardImage = card.querySelector(".card__image");
        const cardName = card.querySelector(".card__heading");
        const cardText = card.querySelector(".card__text");
        const cardPrice = card.querySelector(".card__price");

        cardImage.setAttribute("src", this._data.link);
        cardImage.setAttribute("alt", this._data.name);
        cardName.textContent = this._data.name;
        cardText.textContent = this._data.description;
        cardPrice.textContent = this._data.price;

        return card;
    }

    _setEventListeners() {
        const currentCard = this._element.firstElementChild;
        const cardDeleteButton = currentCard.querySelector(".card__delete");

        cardDeleteButton.addEventListener("click", (evt) => {
            this._deleteCard(evt)
        });
        currentCard.addEventListener("mouseenter", () => {
            this._handleDeleteButtonShow(cardDeleteButton)
        });
        currentCard.addEventListener("mouseleave", () => {
            this._handleDeleteButtonShow(cardDeleteButton)
        });
    }

    getCard() {

        this._element = this._getTemplate(this._data, this._templateSelector)
        this._setEventListeners();
        return this._element;
    }
}