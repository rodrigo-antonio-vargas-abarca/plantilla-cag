import { CreateAccount, DontHaveAccount, EmailAddressLogIn, Href, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount } from "@data/tags";
import { useAppSelector } from "@hooks/common/State";
import Cookies from "js-cookie";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import imageOne from "../../../../public/assets/images/logo/logo.png";
import imageTwo from "../../../../public/assets/images/logo/logo_dark.png";
import {login} from "@/api/services/seguridad/SeguridadService";

export const UserForm = () => {
    const {i18LangStatus} = useAppSelector((store) => store.langSlice);
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("Test123@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const router = useRouter();

    const formSubmitHandle = async () => {
        fakeLogin(); // Todo implementar login real
        const userData = login({email, password})
            .then((response) => {
                console.log("Response capturado: ", response);
                if (response) {
                    Cookies.set("token", JSON.stringify(true));
                    router.push(`/inicio`);
                    toast.success("Autentificado correctamente");
                } else {
                    alert("Ingrese un usuario o contraseña válidos.");
                }
            })
            .catch((error) => {
                console.log("Error capturado: ", error);
            });
    };

    const fakeLogin = () => {
        Cookies.set("token", JSON.stringify(true));
        router.push(`/inicio`);
    }

    return (
        <div>
            <div>
                <Link className="logo" href={`/${i18LangStatus}/sample_page`}>
                    <img className="img-fluid for-dark" src={imageOne.src} alt="login page"/>
                    <img className="img-fluid for-light" src={imageTwo.src} alt="login page"/>
                </Link>
            </div>
            <div className="login-main">
                <Form className="theme-form">
                    <h4>{SignInToAccount}</h4>
                    <p>Ingrese su usuario y contraseña para ingresar</p>
                    <FormGroup>
                        <Label className="col-form-label">{EmailAddressLogIn}</Label>
                        <Input type="email" defaultValue={email} onChange={(event) => setEmail(event.target.value)}
                               placeholder="Test123@gmail.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="col-form-label">{Password}</Label>
                        <div className="position-relative">
                            <Input type={show ? "text" : "password"} defaultValue={password}
                                   onChange={(event) => setPassword(event.target.value)} placeholder="Test@123"/>
                            <div className="show-hide" onClick={() => setShow(!show)}>
                                <span className="show"> </span>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup className="mb-0">
                        <div className="text-end mt-3">
                            <Button color="primary" block className="w-100" onClick={formSubmitHandle}>
                                {SignIn}
                            </Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
};
