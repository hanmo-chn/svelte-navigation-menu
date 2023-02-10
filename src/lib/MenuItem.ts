export interface SubMenuItem {
    /**
     * 跳转的地址
     */
    href?: string;
    /**
     * 菜单的文字
     */
    text: string;
    /**
     * 附加数据
     */
    data?: any;
}


export default interface MenuItem extends SubMenuItem{
    /**
     * 显示的图标
     */
    icon?: string;
    /**
     * 是否打开
     */
    open?: boolean;
    /**
     * 子菜单项目
     */
    items?: Array<SubMenuItem>;
}

