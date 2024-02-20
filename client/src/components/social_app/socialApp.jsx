import { Facebook, Linkedin, Whatsapp, Instagram, Twitter, Snapchat, Telegram, Github, Discord, Wechat, Skype, Line, QuestionCircleFill } from "react-bootstrap-icons";

const Social_app = ({v, social_app_style_css, _key, parentStyle_css}) => {
    return (
        <a key={_key} className={parentStyle_css} href={v.social.includes("whatsapp") ? `https://wa.me/${v?.link}?text=Hello` : v?.link}>
                            {
                            v.social.includes("whatsapp") ?
                            <Whatsapp className={social_app_style_css} />
                            :
                            v.social.includes("instagram") ?
                            <Instagram className={social_app_style_css} />
                            :
                            v.social.includes("facebook") ?
                            <Facebook className={social_app_style_css} />
                            :
                            v.social.includes("twitter") ?
                            <Twitter className={social_app_style_css} />
                            :
                            v.social.includes("linkedin") ?
                            <Linkedin className={social_app_style_css} />
                            :
                            v.social.includes("snapchat") ?
                            <Snapchat className={social_app_style_css} />
                            : 
                            v.social.includes("telegram") ?
                            <Telegram className={social_app_style_css} />
                            :
                            v.social.includes("github") ?
                            <Github className={social_app_style_css} />
                            :
                            v.social.includes("discord") ?
                            <Discord className={social_app_style_css} />
                            :
                            v.social.includes("wechat") ?
                            <Wechat className={social_app_style_css} />
                            :
                            v.social.includes("line") ?
                            <Line className={social_app_style_css} />
                            :
                            v.social.includes("skype") ?
                            <Skype className={social_app_style_css} />
                            :
                            <QuestionCircleFill className={social_app_style_css} />
                        }
                        </a>
    )
}

export default Social_app;