import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_DBURL;
const supabaseKey = import.meta.env.VITE_DBKEY;
console.log("URL exists:", !!supabaseUrl);
console.log("Key exists:", !!supabaseKey);
export const supabase = createClient(supabaseUrl, supabaseKey);


const SupabaseConn = () => {
    const [views, setViews] = useState(null);
    const isMounted = useRef(false);
    
    useEffect(() => {
        if (isMounted.current) return; // Skip if already run
        isMounted.current = true;
        
        const updateAndFetchViews = async () => {
            // 1. Call the SQL function we created to increment +1
            const hasVisited = sessionStorage.getItem('visited_home');

            if (!hasVisited) {
                // 1. ONLY increment if they haven't visited yet
                await supabase.rpc('increment_views', { page_id: 'home' });
                // Mark them as counted for this session
                sessionStorage.setItem('visited_home', 'true');
            }

            // 2. Fetch the new total
            const { data } = await supabase
                .from('site_stats')
                .select('view_count')
                .eq('id', 'home')
                .single();

            if (data) setViews(data.view_count);
        };

        updateAndFetchViews();
    }, []);

    return (
        <div style={{ padding: '10px', borderRadius: '5px' }}>
            {views !== null ? `Site Visits: ${views}` : 'Loading views...'}
        </div>
    );
}

export default SupabaseConn
