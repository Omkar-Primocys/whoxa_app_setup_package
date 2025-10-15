import * as socket_io from 'socket.io';
import { Server } from 'socket.io';
import * as express_serve_static_core from 'express-serve-static-core';
import http from 'http';

interface AppOptions {
    routes?: RouteOptions;
    enableSocket?: boolean;
    jwtSecret?: string;
    models?: {
        UserSocket: any;
        Admin: any;
        App_Flow: any;
        App_Setting: any;
        Group_Setting: any;
        Language_status: any;
        Language_setting: any;
        One_signal_setting: any;
        Website_Setting: any;
    };
    language_functions?: {
        fetchLanguages: () => Promise<any>;
        addLanguageColumn: (language: string) => Promise<any>;
    };
    sequelize?: any;
    Sequelize?: any;
    onSocketConnect?: (io: Server) => void;
    cronJobs?: {
        schedule: string;
        job: () => void;
    }[];
}
interface RouteOptions {
    no_auth_route?: any;
    auth_routes?: any;
    admin_routes?: any;
}
declare function createApp(options?: AppOptions): Promise<{
    app: express_serve_static_core.Express;
    server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    io: Server<socket_io.DefaultEventsMap, socket_io.DefaultEventsMap, socket_io.DefaultEventsMap, any>;
}>;

export { type AppOptions, type RouteOptions, createApp };
