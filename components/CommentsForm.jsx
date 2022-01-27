import React, { useEffect, useState, useRef } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const CommentSubmissionHandler = () => {}

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">CommentsForm</h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          name="comment"
          rows="6"
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        {error && (
          <p className="text-xs text-red-500">All Fields Are Required</p>
        )}
      </div>
      <div className="mt-8">
        <button
          className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-10 py-2 text-lg text-white transition duration-500 hover:bg-indigo-900"
          type="button"
          onClick={CommentSubmissionHandler}
        >
          {' '}
          Sumbit
        </button>
      </div>
    </div>
  )
}

export default CommentsForm
