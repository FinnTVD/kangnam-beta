export default function CommentFB() {
    return (
        <section className='h-[50vh] px-120'>
            <div id='fb-root'></div>
            <div
                className='fb-comments'
                data-href='https://developers.facebook.com/docs/plugins/comments#configurator'
                data-width='500'
                data-numposts='5'
            ></div>
        </section>
    )
}
