const Color = require("../utils/Color");
const urlRegex = /^http(s)?:\/\/[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

/**
 * Represents an embed class constructor
 * @property {Object} author The author of the embed
 * @property {String} color The color of the embed
 * @property {String} description The description of the embed
 * @property {Array<Object>} fields An array field objects of the embed
 * @property {Object} footer The footer of the embed
 * @property {Object} image The image of the embed
 * @property {Object} thumbnail The thumbnail of the embed
 * @property {Number} timestamp The timestamp of the embed
 * @property {String} title The title of the embed
 * @property {String} url The URL of the embed
 */
class RichEmbed {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
        this.timestamp = data.timestamp;
        this.color = data.color;
        this.footer = data.footer;
        this.image = data.image;
        this.thumbnail = data.thumbnail;
        this.author = data.author;
        this.fields = data.fields || [];
    }

    /**
     * Set the color of the embed
     * @param {ColorResolvable} color The color of the embed
     * @returns {RichEmbed}
     */
    setColor(color) {
        if (!color) {
            return;
        }
        if (typeof color === "string") {
            if (color.startsWith("#")) {
                color = parseInt(color.replace("#", ""), 16);
            } else {
                color = Color[color];
            }
        } else if (Array.isArray(color)) {
            color = (color[0] << 16) + (color[1] << 8) + color[2];
        }
        this.color = color;
        return this;
    }
    /**
     * Set the description of the embed
     * @param {String} description The description of the embed
     * @returns {RichEmbed}
     */
    setDescription(description) {
        if (typeof description !== "string") {
            return;
        }
        if (description.length > 2048) {
            return;
        }
        this.description = description;
        return this;
    }
    /**
     * Set the footer of the embed
     * @param {Object} footer The footer object of the embed
     * @param {String} [footer.text] The text of the footer embed
     * @param {String} [footer.iconURL] The icon URL of the footer embed
     * @returns {RichEmbed}
     */
    setFooter(footer) {
        const text = footer.text;
        const iconURL = footer.iconURL;

        if (typeof footer.text !== "string") {
            return;
        }
        if (footer.text > 2048) {
            return;
        }
        this.footer = { text };

        if (footer.iconURL !== undefined) {
            if (typeof footer.iconURL !== "string") {
                return;
            }
            if (!footer.iconURL.startsWith("attachment://") && !urlRegex.test(footer.iconURL)) {
                return;
            }
            this.footer.icon_url = iconURL;
        }
        return this;
    }
    /**
     * Set the timestamp of the embed
     * @param {Number} [timestamp] The timestamp of the embed
     * @returns {RichEmbed}
     */
    setTimestamp(timestamp = new Date()) {
        if (Number.isNaN(new Date(timestamp).getTime())) {
            return;
        }
        this.timestamp = timestamp;
        return this;
    }
    /**
     * Set the title of the embed
     * @param {String} title The title of the embed
     * @returns {RichEmbed} 
     */
    setTitle(title) {
        if (typeof title !== "string") {
            return;
        }
        if (title.length > 256) {
            return;
        }
        this.title = title;
        return this;
    }

    
    

    

    
    
    /**
     * Set the URL of the embed's title
     * @param {String} url The URL of the embed
     * @returns {RichEmbed}
     */
    setURL(url) {
        if (typeof url !== "string") {
            return;
        }
        if (!urlRegex.test(url)) {
            return;
        }
        this.url = url;
        return this;
    }

    
    

    /**
     * Sets the color of the embed.
     * Can be a number, hex string, an RGB array like:
     * ```js
     * [255, 0, 255] // purple
     * ```
     * or one of the following strings:
     * - `DEFAULT`
     * - `WHITE`
     * - `AQUA`
     * - `GREEN`
     * - `BLUE`
     * - `YELLOW`
     * - `PURPLE`
     * - `LUMINOUS_VIVID_PINK`
     * - `GOLD`
     * - `ORANGE`
     * - `RED`
     * - `GREY`
     * - `DARKER_GREY`
     * - `NAVY`
     * - `DARK_AQUA`
     * - `DARK_GREEN`
     * - `DARK_BLUE`
     * - `DARK_PURPLE`
     * - `DARK_VIVID_PINK`
     * - `DARK_GOLD`
     * - `DARK_ORANGE`
     * - `DARK_RED`
     * - `DARK_GREY`
     * - `LIGHT_GREY`
     * - `DARK_NAVY`
     * - `RANDOM`
     * - `INVISIBLE`
     * 
     * @typedef {String|Number|Number[]} ColorResolvable
     **/

    
    

    
    
}

module.exports = RichEmbed;