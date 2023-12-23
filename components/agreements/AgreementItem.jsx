import classes from './AgreementStyles.module.css'

export default function AgreementItem({ data }) {
    return (
        <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: data?.description }}
        />
    )
}
