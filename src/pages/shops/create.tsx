import React from 'react';
import Container from "@components/ui/container";

import Layout from "@components/layout/layout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import { useTranslation } from "next-i18next";
import { MsgFlag } from '@components/icons/MsgFlag';
import Link from 'next/link';
import Button from '@components/ui/button';

export default function create() {

    const { t } = useTranslation("shocreate");

    return (
        <>

            <Container >

                <h1 className='font text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-1xl'>


                </h1>

                <div className="flex min-h-screen flex-col items-center justify-center py-5">


                    <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

                        <p className=" first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left text-left">

                            {t('wecom-text-ceate-shop')}. &nbsp;

                            {t('content-text')}
                        </p>
                        <br />


                        <Link href={'/createnow'} >
                            <a>
                                <Button>
                                    {t('btn-started')}
                                </Button>

                            </a>
                        </Link>

                        <h1 className='font-mono py-5 text-2xl font-bold'>{t('our-service')}</h1>



                        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                            <a
                                target='__blank'
                                href="https://www.education.cellslfux.com"
                                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold"> {t('service_school')} &rarr;</h3>
                                <p className="mt-4 text-xl">
                                    {t('service_school-text')}
                                </p>
                            </a>

                            <a
                                target='__blank'
                                href="https://www.erp.cellsflux.com"
                                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold">{t('service-erp-title')} &rarr;</h3>
                                <p className="mt-4 text-xl">
                                    {t('service-erp-text')}
                                </p>
                            </a>

                            <a

                                href="https://www.cellsflux.com"
                                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold">{t('service-ecommerce')} &rarr;</h3>
                                <p className="mt-4 text-xl">
                                    {t('service-ecommerce-text')}
                                </p>
                            </a>

                            <a
                                target='__blank'
                                href="https://www.innov.cellsflux.com"
                                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold">{t('service-conco-inova')} &rarr;</h3>
                                <p className="mt-4 text-xl">
                                    {t('service-conco-inova-text')}

                                </p>
                            </a>
                        </div>
                    </div>

                    <footer className="flex h-24 w-full items-center justify-center border-t">
                        <Link href={'/message?to=Cf'}>
                            <a>
                                <div
                                    className=" p-6 max-w-sm mx-auto  rounded-xl shadow-black shadow-2xl flex items-center space-x-4">
                                    <div className="shrink-0 animate-pulse">
                                        <MsgFlag />
                                    </div>
                                    <div>
                                        <div className="text-xl font-medium text-black">{t('tchat-live')}</div>
                                        <p className="text-slate-500">{t('tchat-live-text')}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </footer>
                </div>

            </Container>

        </>
    );
}

create.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
                "shocreate",
            ])),
        },
    };
};


