import apiInstance from "../utils/api";
import {notification} from "antd";

class Service {

    static openSuccessHealthCheckNotification = () => {
        notification.open({
            message: 'Connection made!',
            description:
                'The client made a successful connection to the api',
            duration: 6,
        });
    };

    static openFailedHealthCheckNotification = (err: Object) => {
        const errors = Object.keys(err);
        notification.open({
            message: 'Connection failed!',
            description:
                "The client couldn't make a connection with the api",
                //errors.map((key : string) => Object.), // TODO: render error message from object
            duration: 6
        });
    };

    static healthCheck = () => apiInstance.get('/all')
        .then(() => Service.openSuccessHealthCheckNotification())
        .catch((err) => Service.openFailedHealthCheckNotification(err));
}
export default Service;
