import discord
import asyncio
import os

client = discord.Client()

channel = client.get_channel(os.environ['CLIENT_ID'])
await channel.send("@everyone we've got games Friday night at 8. will you join?")