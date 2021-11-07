import React from 'react'

const ArticleTitle = ({title}) => {
    return (
        <div>
        <h2 className="font-PlayfairBold text-5xl font-semibold text-left">
         {title}
        </h2>
        <div className="border-b-4 mb-2 border-blue-400 w-5 text-left mt-2"></div>
      </div>
    )
}

export default ArticleTitle
