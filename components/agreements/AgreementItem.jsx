'use client'
import useSWR from 'swr'
import { handleCheckLangCode } from '@/utils'
import classes from './AgreementStyles.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function AgreementItem ({data}) {

    return(
        <div className={classes.description} dangerouslySetInnerHTML={{ __html: data?.description }}>
        </div>
    )
}