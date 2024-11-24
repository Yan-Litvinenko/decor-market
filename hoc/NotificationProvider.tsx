'use client';

import { useMemo } from 'react';
import { notification } from 'antd';
import { createContext, type JSXElementConstructor, type ReactElement, useContext } from 'react';
import { type NotificationInstance } from 'antd/es/notification/interface';
import type { NotificationArgsProps } from 'antd';

type NotificationContextType = {
    success: (message: string, description?: string) => void;
    error: (message: string, description?: string) => void;
    warning: (message: string, description?: string) => void;
    info: (message: string, description?: string) => void;
};

type NotificationElement = ReactElement<
    {
        prefixCls?: string;
        children?: React.ReactNode;
        className?: string;
        style?: React.CSSProperties;
    },
    | string
    | JSXElementConstructor<{
          prefixCls?: string;
          children?: React.ReactNode;
          className?: string;
          style?: React.CSSProperties;
      }>
>;

const NotificationContext = createContext<NotificationContextType | null>(null);
const defaultNotificationProps: Partial<NotificationArgsProps> = {
    placement: 'topRight',
    duration: 3,
};

export function NotificationProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const [api, contextHolder]: readonly [NotificationInstance, NotificationElement] = notification.useNotification();

    const notificationMethods: NotificationContextType = useMemo(
        () => ({
            success: (message: string, description?: string): void => {
                api.success({
                    ...defaultNotificationProps,
                    message,
                    description,
                });
            },
            error: (message: string, description?: string): void => {
                api.error({
                    ...defaultNotificationProps,
                    message,
                    description,
                    duration: 5,
                });
            },
            warning: (message: string, description?: string): void => {
                api.warning({
                    ...defaultNotificationProps,
                    message,
                    description,
                });
            },
            info: (message: string, description?: string): void => {
                api.info({
                    ...defaultNotificationProps,
                    message,
                    description,
                });
            },
        }),
        [api],
    );

    return (
        <>
            {contextHolder}
            <NotificationContext.Provider value={notificationMethods}>{children}</NotificationContext.Provider>
        </>
    );
}

export const useNotification = (): NotificationContextType => {
    const context: NotificationContextType | null = useContext(NotificationContext);

    if (!context) {
        throw new Error('useNotification must be used within NotificationProvider');
    }

    return context;
};
