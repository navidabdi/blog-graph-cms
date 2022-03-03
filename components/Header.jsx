import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import { MenuIcon, XIcon } from '@heroicons/react/Outline'

const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
  }, [])
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      {isLoading && (
        <div className="container mx-auto mb-8 px-10">
          <div className="flex w-full items-center justify-between border-b border-blue-400 py-5">
            <div className="">
              <Link href="/">
                <span className="cursor-pointer text-4xl font-bold text-white">
                  Nabi Abdi
                </span>
              </Link>
            </div>
            {mobileMenu ? (
              <XIcon
                onClick={() => setMobileMenu(!mobileMenu)}
                className="z-20 h-10 w-10 cursor-pointer text-white md:hidden"
              />
            ) : (
              <MenuIcon
                onClick={() => setMobileMenu(!mobileMenu)}
                className="z-20 h-10 w-10 cursor-pointer text-white md:hidden"
              />
            )}

            <div
              className={`absolute top-0 right-0 z-10 flex h-full w-[90%] flex-col items-center justify-center bg-blue-700 p-4 transition-transform duration-300 md:static md:w-auto md:translate-x-0 md:flex-row md:justify-end md:bg-inherit ${
                mobileMenu ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {categories.map((category, index) => (
                <Link href={`/category/${category.slug}`} key={index}>
                  <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
