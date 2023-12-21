import Contact from './Contact'
import Mission from './Mission'
import Story from './Story'
import Teams from './Teams'

export default function IndexAboutUs({ t, lang, dataInfo }) {
    return (
        <>
            <Story t={t}></Story>
            <Teams t={t}></Teams>
            <Mission t={t}></Mission>
            <Contact
                t={t}
                lang={lang}
                dataInfo={dataInfo}
            ></Contact>
        </>
    )
}
