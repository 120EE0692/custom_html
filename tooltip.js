class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._toolTipContainer
  }

  connectedCallback() {
    const toolTipIcon = document.createElement("span");
    toolTipIcon.textContent = "(?)";
    toolTipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    toolTipIcon.addEventListener('mouseleave', this._hideToolTip.bind(this))
    this.appendChild(toolTipIcon);
  }


  _showTooltip() {
        this._toolTipContainer = document.createElement('div');
        this._toolTipContainer.textContent = "This is my custom tooltip";
        this.appendChild(this._toolTipContainer)
  }

  _hideToolTip() {
    this.removeChild(this._toolTipContainer);
  }
}

customElements.define("mm-tooltip", ToolTip);
