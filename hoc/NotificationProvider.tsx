// 'use client';

// import { notification } from 'antd';
// import { createContext, useContext } from 'react';
// import type { NotificationInstance } from 'antd/es/notification/interface';

// type NotificationContextType = {
//     api: NotificationInstance | null;
// };

// const NotificationContext = createContext<NotificationContextType | null>(null);

// export function NotificationProvider({ children }: { children: React.ReactNode }) {
//     const [api, contextHolder] = notification.useNotification();

//     return (
//         <NotificationContext.Provider value={{ api }}>
//             {contextHolder}
//             {children}
//         </NotificationContext.Provider>
//     );
// }
