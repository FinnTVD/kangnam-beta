export default function CommentFB() {
    return (
        <section
            id='box-comment'
            className='h-fit px-120 min-h-[500px] mt-[2.5vw] px-mb10'
        >
            <h2 className='title32-600-127 text-den title-mb25-700-150'>Comments</h2>
            <div id='fb-root'></div>
            <div
                className='fb-comments'
                data-href='https://developers.facebook.com/docs/plugins/comments#configurator'
                data-width='800'
                data-numposts='5'
            ></div>
        </section>
    )
}
