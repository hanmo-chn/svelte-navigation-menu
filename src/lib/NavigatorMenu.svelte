<script lang="ts">
    import type MenuItem from "./MenuItem";
    import type {SubMenuItem} from "./MenuItem";
    import { slide } from 'svelte/transition';
    import {createEventDispatcher, onMount} from "svelte";

    export let menuItems:Array<MenuItem>;
    export let style: string = '';

    let dispatch = createEventDispatcher();
    let activeItem;

    const handleSubItemClick = (subItem: SubMenuItem) => {
        dispatch("menuClick", subItem);
    }

    const handleItemClick = (item) => {
        if (item.items != null) {
            if (activeItem != null) {
                activeItem.open = false;
            }
            if (item == activeItem) {
                activeItem = null;
            } else {
                activeItem = item;
                activeItem.open = true;
            }
            menuItems = [...menuItems];
        } else if (item.href != null && item.href.length > 0) {
            dispatch("menuClick", item);
        }
    }

    onMount(()=>{
       console.log("菜单内容：", menuItems)
    });

</script>
<div class="tsui-navigator-panel" {style}>
    {#if menuItems}
        {#each menuItems as item}
            <div class="menu-item" on:click={()=>{handleItemClick(item)}}>
                <span>{item.text}</span>
            </div>
            {#if item.open}
                <div class="sub-menu-item" transition:slide="{{delay: 50, duration: 300}}">
                    {#each (item.items || []) as subItem}
                        <div class="menu-item" on:click={()=>{handleSubItemClick(subItem)}}>
                            <span>{subItem.text}</span>
                        </div>
                    {/each}
                </div>
            {/if}

        {/each}
    {/if}
</div>