/**
 * Yuko Official Third-Party Library
 */
declare module "yukora";

type ColorResolvable =
    | "DEFAULT"
    | "INVISIBLE"
    | "WHITE"
    | "AQUA"
    | "GREEN"
    | "BLUE"
    | "YELLOW"
    | "PURPLE"
    | "LUMINOUS_VIVID_PINK"
    | "GOLD"
    | "ORANGE"
    | "RED"
    | "GREY"
    | "DARKER_GREY"
    | "NAVY"
    | "DARK_AQUA"
    | "DARK_GREEN"
    | "DARK_BLUE"
    | "DARK_PURPLE"
    | "DARK_VIVID_PINK"
    | "DARK_GOLD"
    | "DARK_ORANGE"
    | "DARK_RED"
    | "DARK_GREY"
    | "LIGHT_GREY"
    | "DARK_NAVY"
    | "BLURPLE"
    | "GREYPLE"
    | "DARK_BUT_NOT_BLACK"
    | "NOT_QUITE_BLACK"
    | "RANDOM";

interface EmbedAuthorOptions {
  iconURL?: string;
  name: string;
  url?: string;
}

interface EmbedFieldOptions {
  inline?: boolean;
  name: string;
  value: string;
}

interface EmbedFooterOptions {
  iconURL?: string;
  text?: string;
}

export class RichEmbed {
  constructor(data: Record<string, unknown>);
  addField(field: EmbedFieldOptions): RichEmbed;
  addFields(...fields: EmbedFieldsOptions[]): RichEmbed;
  setAuthor(author: EmbedAuthorOptions): RichEmbed;
  setColor(color: ColorResolvable): RichEmbed;
  setDescription(description: string): RichEmbed;
  setFooter(footer: EmbedFooterOptions): RichEmbed;
  setImage(imageURL: string): RichEmbed;
  setThumbnail(thumbnailURL: string): RichEmbed;
  setTimestmap(timestamp?: number): RichEmbed;
  setTitle(title: string): RichEmbed;
  
  setURL(url: string): RichEmbed;
}