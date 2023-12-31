#!/usr/bin/env python3
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    asyncio.gather(
        async_comprehension()
    )