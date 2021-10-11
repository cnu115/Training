const Pagination = (props) => {
    const {total_pages, changePage} = props;
    // console.log(props)
    const pageItems = () => {
        // debugger;
        const totalPagesArr = Array(total_pages);
        return Array.from(totalPagesArr, (item, i)=> {
            const page = i+1;
            return (
                <li key={i} className="page-item">
                    <a className="page-link" onClick={() => changePage(page)} href="#">{page}</a>
                </li>
            )
        })

    }
    // console.log('total_pages ', total_pages)
    return <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
            <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            {pageItems()}
            {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
            {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
            {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
            <li className="page-item">
                <a className="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
}

export default Pagination;